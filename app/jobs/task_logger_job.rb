# frozen_string_literal: true

class TaskLoggerJob < ApplicationJob
  sidekiq_options queue: :default, retry: 3
  queue_as :default

  def perform(task)
    puts "Created a task with following attributes :: #{task.attributes}"
    log = Log.create! task_id: task.id, message: "message"

    puts log.message
  end
end
