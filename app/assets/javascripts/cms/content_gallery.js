// if image-blocks are listed, all images will be displayed clickable at the top of the table

$(document).ready(function() {
  var cb_el = $('#blocks');
  var cb_data = cb_el.data();
  var gallery_el = $('#image_gallery');
  if (cb_data.content_type == 'image_blocks') {
    cb_el.find('tbody tr').each(function() {
      var img_data = $(this).data();
      var img_path = $(this).find('.path').html().trim();
      gallery_el.append("<a href='"+ img_data.edit_path +"' title='"+ img_path +"'><img src='"+ img_path +"' class='img-polaroid' /></a>");
    });
  }      
});   