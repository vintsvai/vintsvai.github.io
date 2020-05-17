
            var header = document.getElementById("myDIV");
            var btns = header.getElementsByClassName("btn");
            var length_in = document.getElementById("length_in");
            var length_out = document.getElementById("length_out");
            var width_in = document.getElementById("width_in");
            var width_out = document.getElementById("width_out");
            var height_in = document.getElementById("height_in");
            var height_out = document.getElementById("height_out");
            var mat = document.getElementById("mat");
            var color_mat = document.getElementById("color_mat");
            var razmer = document.getElementById("razmer");
            var okras = document.getElementById("okras");
            var type_ust = document.getElementById("type_ust");
            var region = document.getElementById("region");
            var imgg = document.getElementById("kalkyl");
            function S(){
                return width_out.value*length_out.value;
            }
            function val_st(){            
                if(razmer.value==1) return (height_out.value-2)*600+1340;
                if(razmer.value==2) return (height_out.value-2)*1100+2400;
                if(razmer.value==3) return (height_out.value-2)*1400+3200;
            }
            function val_posferm(){            
                if(razmer.value==1) return (length_out.value-4)*600+2400;
                if(razmer.value==2) return (length_out.value-4)*1100+4400;
                if(razmer.value==3) return (length_out.value-4)*1400+5600;
            }
             function val_sferm(){         
              var current = document.getElementsByClassName("active1");
              if(current[0].value==1 || current[0].value==3 || current[0].value==5) return (width_out.value-2)*1150+2420;
              else return (width_out.value-2)*1150+2200;
            }
            function kol_lag(){
                if (width_out.value<=2.3) return 3;
                if (width_out.value<=2.8) return 4;
                if (width_out.value<=3.3) return 5;
                if (width_out.value<=3.8) return 6;
                if (width_out.value<=4.3) return 7;
                if (width_out.value<=4.8) return 8;
                if (width_out.value<=5.3) return 9;
                if (width_out.value<=5.8) return 10;
                if (width_out.value<=6.3) return 11;
                if (width_out.value<=6.8) return 12;
                if (width_out.value<=7.3) return 13;
                if (width_out.value<=7.8) return 14;
                if (width_out.value<=8.3) return 15;
                if (width_out.value<=8.8) return 16;
                if (width_out.value<=9.3) return 17;
                if (width_out.value<=9.8) return 18;
                if (width_out.value<=10.3) return 19;
                if (width_out.value<=10.8) return 20;
                if (width_out.value<=11.3) return 21;
                if (width_out.value<=11.8) return 22;
                if (width_out.value<=12) return 23;
            }

            function val_lag(){
                return (length_out.value-4)*170+680;
            }

            function val_pol(){
                if(mat.value==1)
                {
                    if ((color_mat.value == 1) || (color_mat.value == 2)) return 490;
                    else return 515;
                }
                else 
                {
                    if (color_mat.value == 1 || color_mat.value == 2) return 590;
                    else return 620;
                }
            }
            function val_soed(){
                if(mat.value==1)
                {
                    return (width_out.value-2)*200+(length_out.value-4)*100+392;
                }
                else
                {
                    return (width_out.value-2)*230+(length_out.value-4)*120+472;
                }
            }
            function val_okr(){
                if(okras.value==1) return 80;
                else return 300;
            }

            function Sum(){
                var ssss = 0;
                ssss = parseInt($('#st_sum').text())+parseInt($('#podsferm_sum').text())+parseInt($('#sferm_sum').text())+parseInt($('#lag_sum').text())+parseInt($('#okr_sum').text())+parseInt($('#pol_sum').text())+parseInt($('#soed_sum').text());
                return ssss;
            }
            function thats_all(){
                var help = 0;
                help = parseInt($('#Sum').text()) + 15000;
                $('#thats_all').text(help);
                $('#end').text(help +"  рублей");
            }
            razmer.oninput = function()
            {
              $('#st_val').text(val_st());
              $('#st_sum').text(val_st()*$('#st_kol').text());
              $('#podsferm_val').text(val_posferm());
              $('#podsferm_sum').text(val_posferm()*2);
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              thats_all();
            }


            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active1");
                current[0].className = current[0].className.replace(" active1", "");
                this.className += " active1";
                imgg.src ="навесы/" + this.value + ".png";
                $('#sferm_val').text(val_sferm());
                $('#sferm_sum').text(val_sferm()*$('#sferm_kol').text());
                $('#Sum').text(Sum());
                $('#itogg').text(Sum()+"  рублей");
                thats_all();
              });
            }

            length_in.oninput = function()
            {
              length_out.value = this.value;
              if(this.value>=4) $('#st_kol').text('4');
              if(this.value>5) $('#st_kol').text('6');
              if(this.value>7.5) $('#st_kol').text('8');
              $('#st_sum').text(val_st()*$('#st_kol').text());
              if(this.value==4) $('#sferm_kol').text('3');
              if(this.value>4) $('#sferm_kol').text('4');
              if(this.value>6) $('#sferm_kol').text('5');
              if(this.value>8) $('#sferm_kol').text('6');
              if(this.value>10) $('#sferm_kol').text('7');

              $('#podsferm_val').text(val_posferm()); 
              $('#podsferm_sum').text(val_posferm()*2);
              $('#sferm_val').text(val_sferm());
              $('#sferm_sum').text(val_sferm()*$('#sferm_kol').text());
              $('#pol_kol').text(S());
              $('#pol_sum').text(val_pol()*$('#pol_kol').text());
              $('#soed_val').text(val_soed());
              $('#soed_sum').text(val_soed());
              $('#okr_kol').text(S());
              $('#okr_sum').text(S()*$('#okr_val').text());
              $('#lag_val').text(val_lag())
              $('#lag_sum').text(kol_lag()*val_lag());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              $('#imgtext2').text(this.value + ' м.');
              thats_all();
            }
            length_out.oninput = function()
            {
              if(length_out.value > 12) length_out.value = 12;
              length_in.value = this.value;
              if(this.value>4) $('#st_kol').text('4');
              if(this.value>5) $('#st_kol').text('6');
              if(this.value>7.5) $('#st_kol').text('8');
              $('#st_sum').text(val_st()*$('#st_kol').text());
              if(this.value==4) $('#sferm_kol').text('3');
              if(this.value>4) $('#sferm_kol').text('4');
              if(this.value>6) $('#sferm_kol').text('5');
              if(this.value>8) $('#sferm_kol').text('6');
              if(this.value>10) $('#sferm_kol').text('7');
              $('#podsferm_val').text(val_posferm()); 
              $('#podsferm_sum').text(val_posferm()*2);
              $('#sferm_val').text(val_sferm());
              $('#sferm_sum').text(val_sferm()*$('#sferm_kol').text());
              $('#pol_kol').text(S());
              $('#pol_sum').text(val_pol()*$('#pol_kol').text());
              $('#soed_val').text(val_soed());
              $('#soed_sum').text(val_soed());
              $('#okr_kol').text(S());
              $('#okr_sum').text(S()*$('#okr_val').text());
              $('#lag_val').text(val_lag())
              $('#lag_sum').text(kol_lag()*val_lag());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              $('#imgtext2').text(this.value + ' м.');
              thats_all();
            }
            width_in.oninput = function()
            {
              width_out.value = this.value;
              $('#sferm_val').text(val_sferm());
              $('#sferm_sum').text(val_sferm()*$('#sferm_kol').text());
              $('#lag_kol').text(kol_lag());
              $('#lag_sum').text(kol_lag()*val_lag());
              $('#pol_kol').text(S());
              $('#pol_sum').text(val_pol()*$('#pol_kol').text());
              $('#soed_val').text(val_soed());
              $('#soed_sum').text(val_soed());
              $('#okr_kol').text(S());
              $('#okr_sum').text(S()*$('#okr_val').text());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              $('#imgtext3').text(this.value + ' м.');
              thats_all();
            }
            width_out.oninput = function()
            {
              if(width_out.value > 12) width_out.value = 12;
              width_in.value = this.value;
              $('#sferm_val').text(val_sferm());
              $('#sferm_sum').text(val_sferm()*$('#sferm_kol').text());
              $('#lag_kol').text(kol_lag());
              $('#lag_sum').text(kol_lag()*val_lag());
              $('#pol_kol').text(S());
              $('#pol_sum').text(val_pol()*$('#pol_kol').text());
              $('#soed_val').text(val_soed());
              $('#soed_sum').text(val_soed());
              $('#okr_kol').text(S());
              $('#okr_sum').text(S()*$('#okr_val').text());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              $('#imgtext3').text(this.value + ' м.');
              thats_all();
            }
            height_in.oninput = function()
            {
              height_out.value = this.value;
              $('#st_val').text(val_st());
              $('#st_sum').text(val_st()*$('#st_kol').text());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              $('#imgtext1').text(this.value + ' м.');
              thats_all();
            } 
            height_out.oninput = function()
            {
              if(height_out.value > 6) height_out.value = 6;
              height_in.value = this.value;
              $('#st_val').text(val_st());
              $('#st_sum').text(val_st()*$('#st_kol').text());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              $('#imgtext1').text(this.value + ' м.');
              thats_all();
            }
            mat.oninput = function()
            {
              $('#pol_val').text(val_pol());
              $('#pol_sum').text(val_pol()*$('#pol_kol').text());
              $('#soed_val').text(val_soed());
              $('#soed_sum').text(val_soed());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              thats_all();
            }
            color_mat.oninput = function()
            {
                $('#pol_val').text(val_pol());
                $('#pol_sum').text(val_pol()*$('#pol_kol').text());
                $('#Sum').text(Sum());
                $('#itogg').text(Sum()+"  рублей");
                thats_all();
            }
            
            okras.oninput = function()
            {
              $('#okr_val').text(val_okr());
              if(this.value==1) $('#okr_name').text('Окрашивание каркаса - Грунт');
              else $('#okr_name').text('Окрашивание каркаса - Хаммерайт, Дали 3 в 1');
              $('#okr_sum').text(S()*$('#okr_val').text());
              $('#Sum').text(Sum());
              $('#itogg').text(Sum()+"  рублей");
              thats_all();
            }
            type_ust.oninput = function()
            {
              thats_all();
            }
            region.oninput = function()
            {
              thats_all();
            }
        