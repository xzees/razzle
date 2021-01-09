export enum ValidateType {
    Name = 'name',
    Email = 'email',
    EmailConfirm = 'emailConfirm',
    Phone = 'phone',
    Numbers = 'numbers',
    Boolean = 'boolean',
    CharactersAndNumbers = 'charactersAndNumbers',
}


export default interface InputInterface {
    value: string | number | boolean;
    validate: {
        validateType: ValidateType;
        isRequire: boolean;
        maxLength: number;
        isValidate: boolean;
        requireMessage: string;
        errorMessage: string;
    };
}