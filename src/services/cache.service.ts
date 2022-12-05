import { Request, Response } from 'express';
import { createClient } from 'redis';
const rdb = createClient();

rdb.on('error', (err) => console.log('Redis Client Error', err));
rdb.connect().then((res) => console.log('Redis Client Connected'));

export default class CacheService {
	set(key: string, value: any): void {
		value = typeof value === "string" ? value : JSON.stringify(value);
	    rdb.set(key, value, {EX: Number(process.env.REDIS_CACHE_EX)});
	}

	get(key: string): any {
		return new Promise((resolve)=>{
		    rdb.get(key).then((result: string | null)=>{
		        if(result){
		        	resolve(JSON.parse(result));
		        }else{
		        	resolve(null);
		        }
		    });
		});
	}
};