class AdminUser < ActiveRecord::Base
  before_save :ensure_authentication_token

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end
 
  private
 
    def generate_authentication_token
      loop do
        token = Devise.friendly_token
        break token unless AdminUser.where(authentication_token: token).first
      end
    end
end
