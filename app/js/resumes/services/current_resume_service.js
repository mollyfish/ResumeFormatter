module.exports = function(app) {
  app.factory('currentResume', function() {
    return function() {
      var resume = {
        firstName:'',
        lastName:'',
        jobTitle:'',
        phoneNumber:'',
        email:'',
        website:'',
        linkedIn:'',
        personalSummary:'',
        proficient: [''],
        developing: [''],
        projects:[{
          projectName: '',
          projectUrl: '',
          projectCity: '',
          projectDate:'',
          projectBulletPoint: ['']
        }],
        experience:[{
          companyName: '',
          jobTitle: '',
          companyUrl: '',
          companyCity: '',
          startDate: '',
          endDate: '',
          jobBulletPoint: ['']
        }],
        education:[{}]
      }
      return resume;
    };
  });
};
