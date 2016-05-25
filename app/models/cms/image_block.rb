module Cms
  class ImageBlock < Cms::AbstractFileBlock

    acts_as_content_block :taggable => true #, :searchable => {:searchable_columns => ['cms_attachments.data_file_path', :name]}

    has_attachment :file, :styles => {:thumb => "80x80"}
    validates_attachment_presence :file, :message => "You must upload a file"


    def self.display_name
      "Image"
    end
    
    def default_order
      'updated_at desc'
    end

    def image
      file
    end

     # Override default behavior to handle STI class when looking up other versions of attachments.
    def attachable_type
      Cms::Attachment::FILE_BLOCKS
    end
  end
end
