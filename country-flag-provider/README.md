# Serving Country Flags

## Usage
```
    const provider = new CountryFlagProvider()
    const countryCodeGermany = 'de'
    const theFlagAsSVGFile = provider.getCountryFlag(countryCodeGermany)
    response.send(theFlagAsSVGFile) // tested successfully with express
```