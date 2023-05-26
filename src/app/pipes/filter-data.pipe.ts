import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterData",
})
export class FilterDataPipe implements PipeTransform {
  transform(items: any[], filterType: string): any {
    filterType = filterType.toLowerCase();
    if (filterType === "") return items;
    return items.filter(
      (data) =>
        data.name.includes(filterType) ||
        data.extra.__zone_symbol__value.types[0].type.name.includes(
          filterType
        ) ||
        data.extra.__zone_symbol__value?.types[1]?.type?.name?.includes(
          filterType
        )
    );
  }
}
