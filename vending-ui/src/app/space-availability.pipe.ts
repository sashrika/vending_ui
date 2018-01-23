import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceAvailability'
})
export class SpaceAvailabilityPipe implements PipeTransform {

  transform(isOccupied: boolean, args?: any): string {
    if(isOccupied){
      return "not available";
    }else{
      return "available";
    }
  }

}
