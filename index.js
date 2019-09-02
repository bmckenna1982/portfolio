function onLoad() {
    setSectionBarWidth();           
}

function setSectionBarWidth () {
    let sectionClass = '';
    let h2Width = 0;
    $("section").each(function(index) {
        sectionClass = $(this).attr('class').split(" ", 1);
        // sectionClass = sectionClass.split(" ", 1);
        h2Width = $(`.${sectionClass}`).find("h2").innerWidth();
        $(`.${sectionClass}`).find(".bar").width(h2Width);        
    })
}


$(onLoad)