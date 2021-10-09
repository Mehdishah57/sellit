import { Country } from '../../models/country';
import handleError from './../../handleError';

const getCountries = handleError(async(req,res) => {
  const countries = await Country.find();
  res.status(200).send(countries);
})

export default getCountries;