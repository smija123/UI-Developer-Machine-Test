// Just Study

$(document).on('click', '.tab-list li a', function() {
    var $this = $(this),
        $tabList = $this.parents('ul'),
        _idx = $this.closest('li').index();
    
    $tabList.children().eq(_idx).addClass('active').siblings().removeClass('active');
    $tabList.next().children().eq(_idx).addClass('active').siblings().removeClass('active');
  });