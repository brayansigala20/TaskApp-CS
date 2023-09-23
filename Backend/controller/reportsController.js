import Reports from "../models/Reports.js"
const create = async (req, res) => {
    const { name, description, priority, user, serie } = req.body
    try {
        const report = await new Reports({ name, description, priority, source: req.file.filename, user, serie })
        await report.save()
        res.json({msg:'Nuevo Folio creado'})
    } catch (error) {
        console.log(error)
    }
}
const getsReports = async (req, res) => {
    const reports = await Reports.find().where("user").equals(req.user).select("-createdAt -updatedAt -user ")
    res.json(reports)
}
const getReport = async (req, res) => {
    const { id } = req.params
    const report = await Reports.findById(id)
    res.json(report)
}
const stateReport = async (req, res) => {
    const { id } = req.params
    const report = await Reports.findById(id).select("-createdAt -updatedAt -user ")
    const { name, description, source, state, date, priority,serie } = req.body
    try {
        report.name = name || report.name
        report.description = description || report.description
        report.source = source || report.source
        report.state = state || report.state
        report.date = date || report.date
        report.priority = priority || report.priority
        report.serie = serie || report.serie
        const reportUpdate = await report.save()
        res.json(reportUpdate)
    } catch (error) {
        console.log(error)
    }
}
const deleteReport = async (req, res) => {
    const { id } = req.params
    const report = await Reports.findById(id)
    try {
        await report.deleteOne()
        res.json({ msg: 'Reporte eliminado' })
    } catch (error) {
        console.log(error)
    }
}

export {
    create,
    getsReports,
    getReport,
    stateReport,
    deleteReport
}