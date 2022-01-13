"use strict";function openDrop(a){a.classList.toggle("active")}var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()},window.addEventListener("click",function(a){a.target.classList.contains("header__link")&&menuToggle()});var swiper=new Swiper(".diploms__slider",{slidesPerView:1,spaceBetween:30,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3,spaceBetween:30},992:{slidesPerView:4,spaceBetween:30}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbIm9wZW5Ecm9wIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoZWFkZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXJNZW51IiwibWVudU9wZW5lZCIsIm1lbnVUb2dnbGUiLCJvbmNsaWNrIiwid2luZG93IiwiZSIsImNvbXBvc2VkUGF0aCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImdyYWJDdXJzb3IiLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJicmVha3BvaW50cyJdLCJtYXBwaW5ncyI6ImFBQUEsUUFBU0EsQ0FBQUEsUUFBVCxDQUFrQkMsQ0FBbEIsQ0FBb0IsQ0FDaEJBLENBQUUsQ0FBQ0MsU0FBSCxDQUFhQyxNQUFiLENBQW9CLFFBQXBCLENBQ0gsQyxHQUNLQyxDQUFBQSxZQUFZLENBQ2hCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEMsQ0FDSUMsVUFBVSxDQUFxQkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLEMsQ0FDakNFLFVBQVUsRyxDQUNSQyxVQUFVLENBQUcsVUFBSyxDQUN0QkQsVUFBVSxDQUFHLENBQUNBLFVBRFEsQ0FFdEJKLFlBQVksQ0FBQ0YsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsTUFBOUIsQ0FGc0IsQ0FHdEJJLFVBQVUsQ0FBQ0wsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsTUFBNUIsQ0FDRCxDLENBQ0RDLFlBQVksQ0FBQ00sT0FBYixDQUF1QkQsVSxDQUN2QkUsTUFBTSxDQUFDRCxPQUFQLENBQWlCLFNBQUNFLENBQUQsQ0FBa0IsQ0FFL0IsQ0FBQUosVUFBVSxFQUNUSSxDQUFDLENBQUNDLFlBQUYsR0FBaUJDLFFBQWpCLENBQTBCVixZQUExQixDQURELEVBRUNRLENBQUMsQ0FBQ0MsWUFBRixHQUFpQkMsUUFBakIsQ0FBMEJQLFVBQTFCLENBSjhCLEVBTS9CRSxVQUFVLEVBQ2IsQyxDQUNERSxNQUFNLENBQUNJLGdCQUFQLENBQXdCLE9BQXhCLENBQWlDLFNBQVNILENBQVQsQ0FBZSxDQUMzQ0EsQ0FBQyxDQUFDSSxNQUFGLENBQVNkLFNBQVQsQ0FBbUJlLFFBQW5CLENBQTRCLGNBQTVCLENBRDJDLEVBRTVDUixVQUFVLEVBRWIsQ0FKRCxDLENBS0EsR0FBSVMsQ0FBQUEsTUFBTSxDQUFHLEdBQUlDLENBQUFBLE1BQUosQ0FBVyxrQkFBWCxDQUErQixDQUMxQ0MsYUFBYSxDQUFFLENBRDJCLENBRTFDQyxZQUFZLENBQUUsRUFGNEIsQ0FHMUNDLFVBQVUsR0FIZ0MsQ0FJMUNDLElBQUksR0FKc0MsQ0FLMUNDLFVBQVUsQ0FBRSxDQUNWQyxNQUFNLENBQUUscUJBREUsQ0FFVkMsTUFBTSxDQUFFLHFCQUZFLENBTDhCLENBUzFDQyxVQUFVLENBQUUsQ0FDVjFCLEVBQUUsQ0FBRSxvQkFETSxDQUVWMkIsU0FBUyxHQUZDLENBVDhCLENBYTFDQyxXQUFXLENBQUUsQ0FDWCxJQUFLLENBQ0hULGFBQWEsQ0FBRSxDQURaLENBRUhDLFlBQVksQ0FBRSxFQUZYLENBRE0sQ0FLWCxJQUFLLENBQ0hELGFBQWEsQ0FBRSxDQURaLENBRUhDLFlBQVksQ0FBRSxFQUZYLENBTE0sQ0FTWCxJQUFLLENBQ0hELGFBQWEsQ0FBRSxDQURaLENBRUhDLFlBQVksQ0FBRSxFQUZYLENBVE0sQ0FiNkIsQ0FBL0IsQ0FBYiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG9wZW5Ecm9wKGVsKXtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59XHJcbmNvbnN0IGhlYWRlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b25cIik7XHJcbmNvbnN0IGhlYWRlck1lbnU6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKTtcclxubGV0IG1lbnVPcGVuZWQgPSBmYWxzZTtcclxuY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICBtZW51T3BlbmVkID0gIW1lbnVPcGVuZWQ7XHJcbiAgaGVhZGVyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbn07XHJcbmhlYWRlckJ1dHRvbi5vbmNsaWNrID0gbWVudVRvZ2dsZTtcclxud2luZG93Lm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gIGlmIChcclxuICAgIG1lbnVPcGVuZWQgJiZcclxuICAgICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlckJ1dHRvbikgJiZcclxuICAgICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlck1lbnUpXHJcbiAgKVxyXG4gICAgbWVudVRvZ2dsZSgpO1xyXG59O1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlIDphbnkpe1xyXG4gIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19saW5rJykpe1xyXG4gICAgbWVudVRvZ2dsZSgpO1xyXG4gIH1cclxufSlcclxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuZGlwbG9tc19fc2xpZGVyXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNjQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9XHJcbiAgICA5OTI6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7Il19
