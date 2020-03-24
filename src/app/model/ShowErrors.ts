export class ShowErrors {

    private static readonly errorMessages = {
      'required': () => 'This field is required',
      'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
      'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
      'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
      'years': (params) => params.message,
      'countryCity': (params) => params.message,
      'uniqueName': (params) => params.message,
      'telephoneNumbers': (params) => params.message,
      'telephoneNumber': (params) => params.message
    };

}