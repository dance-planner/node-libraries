export interface IInfo {
    shortTitleOfTheApp: string
    longTitleOfTheApp: string
    location: string
    chooseDanceStyle: string
    chooseCity: string
    noMatchFound: string
    eventsInRange: string
    distanceUnitShort: string
    distanceUnitLong: string
    todayIn: string
    tomorrowIn: string
    niceYouAreInterested: string
    shareTheFollowingLinkWithFriends: string
    hereYouFindTheWhatsAppGroup: string
    hereYouFindTheTelegramGroup: string
    createNewEvent: string
    createEvents: string
    contact: string
    danceAndMusicStyle: string
    date: string
    linkToFurtherInfo: string
    telegramLink: string
    whatsAppLink: string
    comments: string
    title: string
    addThisDate: string
    searchEvents: string
    weekDays: string[]
  }
  
  export interface ITexts {
    language: string
    info: IInfo
  }
  
  export interface IEvent {
    id: string
    dance: string
    country: string
    location: string
    date: string
    posterURL: string
    link: string
    title: string
    comments: string
    createdFromLatitude: number
    createdFromLongitude: number
    eventLatitude: number
    eventLongitude: number
    distance: number
    reportedBecause: string
    whatsAppLink: string
    telegramLink: string
    supporter: string
  }
  
  export interface IQData {
    date: string
    url: string
    title: string
    dances: string
    country: string
    location: string
    eventLink: string
  }
  
  export interface ICity {
      name: string
      country: string
      altCountry: string
      muni: string
      muniSub: string
      featureClass: string
      featureCode: string
      adminCode: string
      population: number
      lat: number
      lon: number
  }