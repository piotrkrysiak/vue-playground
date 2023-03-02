export interface Ability2 {
  name: string
  url: string
}

export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Pokemon {
  id: number
  abilities: Ability[]
  base_experience: number
  height: number
  name: string
  order: number
  weight: number
}
