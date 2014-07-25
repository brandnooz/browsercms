  // TODO: encapsulate
  // refactor

  var tags = [];
  var tag_el = 'input.tag-list';

  function update_tags( ) {
    console.log(tags);
    $( tag_el ).val( tags.join(' ') );
  }

  function tag_exists( tag ) {
    return (tag_index( tag ) != -1)
  }

  function tag_index( tag ) {
    for(var i=0; i<tags.length; i++) {
      if (tags[i] == tag)
        return i;
    }
    return -1;
  }

  function remove_tag( tag ) {
    var tag_i = tag_index( tag );
    if (tag_i != -1) 
      tags.splice(tag_i, 1);
  }

  $(document).ready(function() {
    if ($( tag_el ).length > 0)
      tags = $( tag_el ).val().split(' ');

    $('.tag-label-list .label').each(function() {
      if (tag_exists( $(this).attr('rel') ))
        $(this).addClass('label-info');
    });      

    $('.tag-label-list .label').click(function() {
      console.log('you clocked a tag');
      var tag_ob = $(this);

      // add tag
      if (tag_ob.hasClass('label-info')) {
        tag_ob.removeClass('label-info');
        remove_tag( tag_ob.attr('rel') );

      // remove tag
      } else {
        tag_ob.addClass('label-info');
        tags.push( tag_ob.attr('rel') );
      }

      update_tags();
    });
  });