export interface ISavingAccount {
    name:string;
    cuenta:{
        "estado":string,
        "fechaUltimaAct":string,
        "idCliente":string,
        "numeroCuenta":string,
        "saldo":number
    }
}
