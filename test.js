/**
 * Класс для работы с API
 *
 * @author		User Name 
 * @version		v.1.0 (dd/mm/yyyy)
 */
class Api
{
	constructor() 
	{

	}

	/**
	 * Заполняет строковый шаблон template данными из объекта object
	 *
	 * @author		User Name 
	 * @version		v.1.0 (dd/mm/yyyy)
	 * @param		{object} object
	 * @param		{string} template
	 * @return		{string}
	 */
	get_api_path(object, template)
	{
		let result = template;

		for (let key in object) {
			if (object.hasOwnProperty(key)) {
				const value = encodeURIComponent(object[key]);
				result = result.replace(new RegExp(`%${key}%`, 'g'), value);
			}
		}

		return result;
	}

	get_api_path_2(object, template)
	{
		let result = template;

		for (let key in object) {
			if (object.hasOwnProperty(key)) {
				const value = encodeURIComponent(object[key]);
				const placeholder = `%${key}%`;
				if (result.includes(placeholder)) {
					result = result.replace(new RegExp(placeholder, 'g'), value);
				}
			}
		}

		return result;
	}
}

let user =
{
	id	: 20,
	name	: 'John Dow',
	role	: 'QA',
	salary	: 100
};

let api_path_templates =
[
	"/api/items/%id%/%name%",
	"/api/items/%id%/%role%",
	"/api/items/%id%/%salary%"
];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) =>
{
	return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));

// Ожидаемый результат
let expected_result = ["/api/items/20/John%20Dow","/api/items/20/QA","/api/items/20/100"];
