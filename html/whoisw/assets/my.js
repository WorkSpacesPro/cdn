$(document).ready(function () {
    var toggleBtn = '<div class="toggle-btn"><div class="full-title"><i class="full-title-icon"></i><a>点击打开</a></div></div>';

    // 鍒ゆ柇鏄惁鏈夋牸寮忓寲鐨刉hois淇℃伅
    if ($('#formatted-whois').html().trim() !== '') {
        // 闅愯棌瀹屾暣鐨刉hois淇℃伅
        $('#full-whois').hide();

        // 娣诲姞鎶樺彔鎸夐挳
        $('#full-whois').before(toggleBtn);
    } else {
        // 娣诲姞鎶樺彔鎸夐挳
        $('#full-whois').after(toggleBtn);
    }

    // 鐐瑰嚮鎶樺彔鎸夐挳鏃跺垏鎹㈠畬鏁碬hois淇℃伅鐨勬樉绀虹姸鎬 
    $('.toggle-btn').click(function () {
        $('#full-whois').slideToggle('fast', function () {
            if ($('#full-whois').is(':visible')) {
                $('.toggle-btn').find('.full-title a').html('点击打开');
                $('.toggle-btn').addClass('active'); // 娣诲姞 active 鏍峰紡
            } else {
                $('.toggle-btn').find('.full-title a').html('点击打开');
                $('.toggle-btn').removeClass('active'); // 绉婚櫎 active 鏍峰紡
            }
        });
    });
});

    // 鑾峰彇杈撳叆妗嗗厓绱 
    var inputElement = document.getElementById("input");

    // 妫€鏌ユ祻瑙堝櫒鏄惁鏀寔鏈湴瀛樺偍
    if (typeof(Storage) !== "undefined") {
        // 濡傛灉鏈湴瀛樺偍涓湁淇濆瓨鐨勫厜鏍囦綅缃紝灏嗗厜鏍囩Щ鍔ㄥ埌璇ヤ綅缃 
        var cursorPosition = sessionStorage.getItem("cursorPosition");
        if (cursorPosition) {
            inputElement.setSelectionRange(cursorPosition, cursorPosition);
        }

        // 鐩戝惉杈撳叆妗嗙殑鍏夋爣浣嶇疆鍙樺寲浜嬩欢锛屽苟灏嗗綋鍓嶅厜鏍囦綅缃繚瀛樺埌鏈湴瀛樺偍
        inputElement.addEventListener("input", function() {
            sessionStorage.setItem("cursorPosition", inputElement.selectionStart);
        });
    }

    // 灏嗙劍鐐硅缃埌杈撳叆妗 
    inputElement.focus();