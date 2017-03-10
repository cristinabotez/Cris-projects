$(document).ready(function () {
    function toggleDivByClick(item) {
        var number = item.innerHTML;
        var rows = $('.item-row');
        number = parseInt(number) - 1;
        $(rows[number]).toggle();
    }

    $('.btn').on('click', function() {
        //console.log(this);
        toggleDivByClick(this);
    });

    $('#show').on('click', function () {
        $(this).prop('disabled', true);
        $('#hide').prop('disabled', false);
        $('.item-row').show();



    });

    $('#hide').on('click', function () {
        $(this).prop('disabled', true);
        $('#show').prop('disabled', false);
        $('.item-row').hide();
        document.getElementById("hide").disabled = true;
    });

    //document.getElementById('row1').style.backgroundColor="red";
    //document.getElementById('row2').style.backgroundColor="yellow";
    //document.getElementById('row3').style.backgroundColor="blue";
    //document.getElementById('row4').style.backgroundColor="green";
    //document.getElementById('row5').style.backgroundColor="grey";

    function ColorDivs() {

        var colorDivs = ['blue', 'red', 'yellow', 'green', 'purple'];
        var rows=$('.item-row');

        for (var i = 0; i < rows.length; i++){
            $(rows[i]).css('background-color', colorDivs[i]);
        }
    }
    ColorDivs();

    function createForm() {
        var formWrapper = document.createElement('form');
        var divWrapper = document.createElement('div');
        divWrapper.setAttribute('class', 'firstDiv div-wrapper');
        var divWrapper2 = document.createElement('div');
        divWrapper2.setAttribute('class', 'secondDiv div-wrapper');
        var input10 = document.createElement('input');
        input10.setAttribute('class', 'form-control');
        var input11 = document.createElement('input');
        input11.setAttribute('class', 'form-control');
        var input20 = document.createElement('input');
        input20.setAttribute('class', 'form-control');
        var input21 = document.createElement('input');
        input21.setAttribute('class', 'form-control');
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-primary');

        divWrapper.append(input10);
        divWrapper.append(input11);
        divWrapper2.append(input20);
        divWrapper2.append(input21);
        divWrapper2.append(button);
        formWrapper.append(divWrapper);
        formWrapper.append(divWrapper2);
        document.body.append(formWrapper);

    }
    createForm();

    function addEventOnForm() {
        var inputs = document.getElementsByClassName('form-control');
        inputs[1].addEventListener('change', function () {
            document.getElementsByClassName('secondDiv')[0].style.display = 'block';
        });
    }

    addEventOnForm();
});
