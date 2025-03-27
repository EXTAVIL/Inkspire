import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trimText',
    pure: false
})
export class TrimTextPipe implements PipeTransform {
    transform(value: string, limit: 10) {
        return value && value.length? value.substring(0, limit) + '...' : value;      
    }
    
}