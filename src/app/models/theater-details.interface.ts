

export interface TheaterDetails {
    data:{
        theaterShowtimeGroupings:{
            theaterId:string,
            theaterDisplayDates:string[],
            displayDate:string,
            mppBaseUrl:string,
            movies:[
                {
                    fandangoId:string,
                    emsId:string,
                    emsVersionId:string,
                    name:string,
                    durationMinutes:number,
                    tomatoRating: {
                        state:string,
                        tomatometer:number,
                        iconImage: {
                            url:string,
                        },
                    },
                    userRating: {
                        state:string,
                        dtlLikedScore:number,
                        iconImage: {
                            url:string,
                        },
                    },
                    motionPictureRating: {
                        area:string,
                        code:string,
                        description:string,
                    },
                    releaseDate:string,
                    posterImage: {
                        url:string,
                    },
                    movieVariants: [
                        {
                            amenities:[
                                name:string,
                                id:string,
                                shortDescription:string,
                            ],
                            showTimes: [
                                {
                                    id:string,
                                    type:string,
                                    providerName:string,
                                    providerDate:string,
                                    isActive:boolean, //says true on schema???
                                    sdate:string
                                },
                            ],
                        }
                    ]
                }
            ]
        }
    }
}