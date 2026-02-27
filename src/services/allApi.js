import { baseUrl } from "./baseUrl";
import { commonApi } from "./commonApi";

export const getAllEquipment = () =>
  commonApi("GET", `${baseUrl}/equipment`);

export const addEquipment = (data) =>
  commonApi("POST", `${baseUrl}/equipment`, data);

export const deleteEquipment = (id) =>
  commonApi("DELETE", `${baseUrl}/equipment/${id}`);

export const updateEquipment = (id, data) =>
  commonApi("PUT", `${baseUrl}/equipment/${id}`, data);