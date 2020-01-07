import * as path from 'path'
import * as fs from 'fs-sync'

export class CountryFlagProvider {

  private currentPath = path.resolve(path.dirname(''))
  
  public getCountryFlag(countryCode: string) {
    return fs.read(`${this.currentPath}/flags/${countryCode.toLowerCase()}.svg`)
  }
}