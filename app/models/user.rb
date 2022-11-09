# frozen_string_literal: true

class User < ApplicationRecord
  MAX_NAME_LENGTH = 35
  MAX_EMAIL_LENGTH = 255
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
  has_many :assigned_tasks, foreign_key: :assigned_user_id, class_name: "Task"
  has_secure_password

  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
  validates :email, presence: true, length: { maximum: MAX_EMAIL_LENGTH }, uniqueness: { case_sensitive: false },
    format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: 6 }, if: -> { password.present? }
  validates :password_confirmation, presence: true, on: :create

  before_save :to_lowercase

  private

    def to_lowercase
      email.downcase
    end
end