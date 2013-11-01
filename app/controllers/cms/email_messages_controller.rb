module Cms
class EmailMessagesController < Cms::BaseController
  layout 'cms/administration'
  
  check_permissions :administrate
  before_filter :set_menu_section
  
  def index
    @messages = EmailMessage.paginate(:page => params[:page])
  end
  
  def show
    @message = EmailMessage.find(params[:id])
  end

  private

    def set_menu_section
      @menu_section = 'email_messages'
    end
  
end
end