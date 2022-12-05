import itemsModel from '../model/car.model';
import { Users } from '../interface/Users';

const upItem = async(item:Users) => {
    const newItem = await itemsModel.create(item);
    return newItem;
}

const getItem = async(id: string) => {
    const item = await itemsModel.findOne({ _id: id}) || {};
    return item;
}

const getItems = async() => {
    const item = await itemsModel.find({}) || {};
    return item;
}

const setItem = async(id: string, data: object) => {
    const item = await itemsModel.findByIdAndUpdate({ _id: id }, data, { new: true }) || {};
    return item;
}

const deleteItem = async(id: string) => {
    const item = await itemsModel.findByIdAndDelete({ _id: id }) || {};
    return item;
}

export = { upItem, getItem, getItems, setItem, deleteItem }