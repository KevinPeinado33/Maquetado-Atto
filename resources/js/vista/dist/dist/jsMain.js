var main={init:function(){$(window).trigger("scroll"),$(window).scroll(function(){var e=$(window).scrollTop(),o=$("#grupo").position(),n=$("#ministerio").position(),a=$("#pm").position(),l=$("#escuela").position(),t=$("#footer").position(),r=64;math.between(0,o.top-r,e)&&(graphics.themeColor("#37474f"),$(".navbar-color").addClass("blue-grey darken-3"),$(".navbar-color").removeClass("green accent-4"),$(".btn-login").removeClass("green accent-3"),$(".btn-login").addClass("blue")),math.between(o.top-r,n.top-r,e)&&(graphics.themeColor("#00C853"),$(".navbar-color").removeClass("blue-grey darken-3"),$(".navbar-color").addClass("green accent-4"),$(".btn-login").removeClass("blue"),$(".btn-login").addClass("green accent-3")),math.between(n.top-r,a.top-r,e)&&(graphics.themeColor("#F44336"),$(".navbar-color").removeClass("green accent-4"),$(".navbar-color").removeClass("blue"),$(".navbar-color").addClass("red"),$(".btn-login").removeClass("green accent-3"),$(".btn-login").removeClass("blue lighten-2"),$(".btn-login").addClass("red lighten-2")),math.between(a.top-r,l.top-r,e)&&(graphics.themeColor("#2196F3"),$(".navbar-color").removeClass("red yellow darken-1"),$(".navbar-color").addClass("blue"),$(".btn-login").removeClass("red lighten-2 yellow lighten-2"),$(".btn-login").addClass("blue lighten-2")),math.between(l.top-r,t.top-r,e)&&(graphics.themeColor("#fdd835"),$(".navbar-color").removeClass("blue"),$(".navbar-color").addClass("yellow darken-1"),$(".btn-login").removeClass("blue lighten-2"),$(".btn-login").addClass("yellow lighten-2"))});var n="";$(".scroll").on("click touchstart",function(e){if(n!=this.hash){e.preventDefault();var o;o=$(this.hash).offset().top>$(document).height()-$(window).height()?$(document).height()-$(window).height():$(this.hash).offset().top,$("html,body").animate({scrollTop:o},300,"swing"),n=this.hash}})}};$(document).ready(function(){main.init()});