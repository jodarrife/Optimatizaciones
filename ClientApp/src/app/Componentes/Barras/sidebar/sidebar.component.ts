import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from '../../ComponetesLogin/servicesLogin/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private myAwesomeService: UserService) {

   }

  ngOnInit() {
    
    console.log('Estas logueado?' ,this.myAwesomeService.getUserLoggedId())

    $(document).ready(function () {
      $('.menu li:has(ul)').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('activado')) {
          $(this).removeClass('activado');
          $(this).children('ul').slideUp();
        } else {
          $('.menu li ul').slideUp();
          $('.menu li').removeClass('activado');
          $(this).addClass('activado');
          $(this).children('ul').slideDown();
        }
      });

      $('.btn-menu').click(function () {
        $('.contenedor-menu .menu').slideToggle();
      });

      $(window).resize(function () {
        if ($(document).width() > 450) {
          $('.contenedor-menu .menu').css({ 'display': 'block' });
        }

        if ($(document).width() < 450) {
          $('.contenedor-menu .menu').css({ 'display': 'none' });
          $('.menu li ul').slideUp();
          $('.menu li').removeClass('activado');
        }
      });

      $('.menu li ul li a').click(function () {
        window.location.href = $(this).attr("href");
      });
    });

    $(function () {
      $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });

      $(window).resize(function (e) {
        if ($(window).width() <= 768) {
          $("#wrapper").removeClass("toggled");
        } else {
          $("#wrapper").addClass("toggled");
        }
      });
    });

  }
}