const  powerPlantPartners =   require("../utils/jsonHelper");
exports.HsseProjects = async (req, res) => {
    try {
      const { plant_id } = req.query;
  
      if (!plant_id) {
        return res.status(400).json({ error: 'plant_id parameter is required' });
      }
  
      const partners = powerPlantPartners.filter((partner) => partner.plant_id === plant_id);
  
      if (partners.length === 0) {
        return res.status(404).json({ error: 'Partners not found for the given plant_id' });
      }
  
      return res.json(partners);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  