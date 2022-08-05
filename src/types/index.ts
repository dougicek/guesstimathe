export interface NumberToGuess {
    value: number;
    formula: string;
}

export enum SIGNS {
    lessThan = "<",
    equals = "=",
    greaterThan = ">",
}

export enum BUTTON_TYPES {
    default = 'default',
    signButton = 'sign-button'
}