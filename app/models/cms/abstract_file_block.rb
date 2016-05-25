module Cms
  class AbstractFileBlock < ActiveRecord::Base


    self.table_name = Namespacing.prefix("file_blocks")

    validates_presence_of :name

    #default_scope joins(:'cms_attachments')
    scope :by_section, lambda { |section| {
        :include => {:attachments => :section_node},
        :conditions => ["#{SectionNode.table_name}.ancestry = ?", section.node.ancestry_path]}
    }

    def self.columns_for_index
     [{:label => "Name", :method => :name, :order => "name"},
      {:label => "Path", :method => :data_path, :order => "url"},
      {:label => "Size", :method => :file_size, :order => "file_size"},
      {:label => "Updated On", :method => :updated_on_string, :order => "updated_at"}]
    end    

    # Return the parent section for this block.
    # @return [Cms::Section]
    def parent
      file.parent
    end

    # Exists here so FileBrowser can polymorphically call file_size on Page, Images, Files, etc.
    def file_size
      file.size.round_bytes
    end

    def path
      file.url
    end
    
    def data_path
      file.data_file_path
    end

    def self.publishable?
      true
    end

    def set_attachment_path
      if @attachment_file_path && @attachment_file_path != attachment.file_path
        attachment.file_path = @attachment_file_path
      end
    end

    def set_attachment_section
      if @attachment_section_id && @attachment_section_id != attachment.section
        attachment.section_id = @attachment_section_id
      end
    end

  end
end
