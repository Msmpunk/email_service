export async function getInformation(req, res){
    try {
        return res.status(200).send({
            status: true,
            message: 'Esta funcionando el servicio getInformation'
        })
        
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: 'Hay un error en el servidor',
            error: error
        })
    }
}