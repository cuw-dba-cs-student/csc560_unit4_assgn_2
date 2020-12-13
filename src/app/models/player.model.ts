export class Player {
  constructor(
    _Id?: String,
    No?: Number,
    Name?: String,
    Age?: Number,
    Pos?: String,
    GamesPlayed?: Number,
    GamesStarted?: Number,
    Wt?: String ,
    College?: College ,
    BirthDate?: String,
    YrsInNFL?: String, 
    Salary?: String
  ){}
}

export class College {
  constructor(
    Univ: String
  ){}
}

export class PlayedAndStarted {
  constructor(
  GamesPlayed: Number,
  GamesStarted: Number
  ){}
}
