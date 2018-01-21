import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceAvailability'
})
export class SpaceAvailabilityPipe implements PipeTransform {

  transform(availability: boolean, args?: any): string {
    if(availability){
      return "available";
    }else{
      return "not available";
    }
  }

}
