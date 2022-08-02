export interface ITransaction {
    name:string;
    transaccion:{
        "monto":number,
        "fechaUltimaAct":string,
        "numeroCuenta":string,
        "terminal":string,
        "tipo":string,
        "usuario":string
    }
}
