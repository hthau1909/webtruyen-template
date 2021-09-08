function AddReadMore() {
        //This limit you can set after how much characters you want to show Read More.
        var carLmt = 80;
        // Text to show when text is collapsed
        var contentDataTxt = " ... xem thêm";
        // Text to show when text is expanded
        var someVeekTxt = " thu gọn";


        //Traverse all selectors with this class and manupulate HTML part to show Read More
        $(".showContentAll").each(function() {
            if ($(this).find(".firstSec").length)
                return;

            var allstr = $(this).text();
            if (allstr.length > carLmt) {
                var firstSet = allstr.substring(0, carLmt);
                var secdHalf = allstr.substring(carLmt, allstr.length);
                var strtoadd = firstSet + "<span class='DspInfo'>" + secdHalf + "</span><span class='contentData'  title='Click to Show More'>" + contentDataTxt + "</span><span class='someVeek' title='Click to Show Less'>" + someVeekTxt + "</span>";
                $(this).html(strtoadd);
            }

        });
        //ReadMore and ReadLess Click Event binding
        $(document).on("click", ".contentData,.someVeek", function() {
            $(this).closest(".showContentAll").toggleClass("displayreadallsome readalldatafull");
        });
    }
    $(function() {
        //Calling function after Page Load
        AddReadMore();
    });