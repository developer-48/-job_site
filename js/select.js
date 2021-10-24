//select
const selectFunc = (name) =>{
  
    $(`.${name}`).each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 350; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('.active').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select ');
        $('<div>', {
            class: `new-select__list ${name}-new-select__list`
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 0; i < selectOptionLength; i++) {
            $('<div>', {
                class: `new-select__item ${(i == 0)? 'active': ''} ${name}-item`,
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
                    $(`.${name}-new-select__list div`).removeClass("active")
                    if(!$(this).hasClass('active')){                    
                        $(this).addClass('active')
                    }
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
}

selectFunc("typeEmployment__watch-select")
selectFunc("typeEmployment__remoteWork-select")