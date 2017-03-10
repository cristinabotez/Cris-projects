(function() {

        $(document).ready(function () {

            function getPerson(number) {
                $.ajax({
                    url: "http://swapi.co/api/people/" + number,
                    method: "GET"
                }).done(function (response) {
                    //$(this).addClass("done");
                    //console.log(JSON.parse(response));
                    createSinglePerson(response);
                    //$('.name').html(response.name);
                    //$('.birth-date').html(response.birth_year);
                    //$('.hair').html(response.hair_color);
                    //$('.gender').html(response.gender);
                    //$('.skin').html(response.skin_color);
                    //$('.eye-color').html(response.eye_color);
                });
            }

            //for(var i=1; i<20; i++) {
                //getPerson(i);
            //}

            function getPlanet(number) {
                $.ajax({
                    url: "http://swapi.co/api/planets/" + number,
                    method: "GET"
                }).done(function (response) {
                    //$(this).addClass("done");
                    //console.log(JSON.parse(response));
                    createSinglePlanet(response);

                    //$('.single-planet .name').html(response.name);
                    //$('.single-planet .gravity').html(response.gravity);
                    //$('.single-planet .terrain').html(response.terrain);
                    //$('.single-planet .population').html(response.population);
                    //$('.single-planet .surface_water').html(response.surface_water);
                    //$('.single-planet .climate').html(response.climate);
                });
            }

            //for(var i=1; i<20; i++) {
                //getPlanet(i);
           //}

            function createSinglePerson(data) {

                var div = document.createElement("div");
                div.setAttribute("class", "single-person");

                var createName = document.createElement('p');
                createName.setAttribute("class", "name lead text-center");
                createName.append(document.createTextNode(data.name));

                var createBirth = document.createElement('p');
                createBirth.append(document.createTextNode(data.birth_year));

                var createHair = document.createElement('p');
                createHair.append(document.createTextNode(data.hair_color));

                var createGender = document.createElement('p');
                createGender.append(document.createTextNode(data.gender));

                var createSkin = document.createElement('p');
                createSkin.append(document.createTextNode(data.skin_color));

                var createEye = document.createElement('p');
                createEye.append(document.createTextNode(data.eye_color));

                div.appendChild(createName);
                div.appendChild(createBirth);
                div.appendChild(createHair);
                div.appendChild(createGender);
                div.appendChild(createSkin);
                div.appendChild(createEye);

                $('.people-wrapper').append(div);

            }

            function createSinglePlanet(data) {

                var div = document.createElement("div");
                div.setAttribute("class", "single-planet");

                var createName = document.createElement('p');
                createName.setAttribute("class", "name lead text-center");
                createName.append(document.createTextNode(data.name));

                var createBirth = document.createElement('p');
                createBirth.append(document.createTextNode(data.gravity));

                var createHair = document.createElement('p');
                createHair.append(document.createTextNode(data.terrain));

                var createGender = document.createElement('p');
                createGender.append(document.createTextNode(data.population));

                var createSkin = document.createElement('p');
                createSkin.append(document.createTextNode(data.surface_water));

                var createEye = document.createElement('p');
                createEye.append(document.createTextNode(data.climate));

                div.appendChild(createName);
                div.appendChild(createBirth);
                div.appendChild(createHair);
                div.appendChild(createGender);
                div.appendChild(createSkin);
                div.appendChild(createEye);

                $('.planet-wrapper').append(div);

            }

            $('#load-people').on('click', function () {
                $('.planet-wrapper').html('');
                for(var i=1; i<20; i++) {
                    getPerson(i);
                }
            });

            $('#load-planet').on('click', function () {
                $('.people-wrapper').html('');
                for(var i=1; i<20; i++) {
                    getPlanet(i);
                }
            });

    });
})();
