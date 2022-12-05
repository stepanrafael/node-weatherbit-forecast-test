import { Request, Response } from 'express';
import fs from 'fs';

export default function(err: any, req: Request, res: Response, next: any){
	const path = process.cwd() + "/log.json";
	
	if(fs.existsSync(path)){
		let row = fs.readFileSync(path, 'utf8');
		let json = JSON.parse(row);
		json.push({
		    "error": err,
		    "date": new Date()
		});
		fs.writeFileSync(path, JSON.stringify(json));
	}else{
		let data = [{
		    "error": err,
		    "date": new Date()
		}];
		fs.writeFileSync(path, JSON.stringify(data));
	}
}