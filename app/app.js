var thankyouApp = angular.module('thankyouApp', []);



thankyouApp.controller('thankyouNote', function($scope, $http, $location) {
   // Get company name from URL
   $scope.path = $location.path();
   $scope.company = $scope.path.substring(1);

   // Fetch contact list
   $http.get('assets/contacts.json')
      .success(function(data, status, header, config) {
         // Store data if company is in the list
         if (data.hasOwnProperty($scope.company)) {
            $scope.data = data[$scope.company];
         }
         // Redirect to home if not
         else if ($scope.company !== '') {
            window.location = "#/";
         }
      })
      .error(function(error) {
         console.log('contacts.json not found', error);
      });

   $scope.personal = {
      name: 'Vicky Leong',
      title: 'Front-End Developer',
      website: 'www.vickyleong.com',
      email: 'vleong2332@gmail.com',
      phone: '214.226.3442',
      resumeLink: 'assets/front_end_dev_vicky_leong.pdf'
   }


});