'use client'
import { useState } from 'react';
import Formatter from './formatter';
import { FILEFORMAT } from '../../enums/fileFormats';

export default function FormatterSelector() {
    const [fromFileType, setFromFileType ] = useState(FILEFORMAT.JSON);
    const [toFileType, setToFileType ] = useState(FILEFORMAT.XML);

    function selectToFileFormat(event : any) {
        setToFileType(event?.target.value)
    }

    function selectFromFileFormat(event: any) {
        setFromFileType(event?.target.value)
    }

  return (
        <div className="p-4 mb-4 rounded-lg shadow border">
            <div className="flex justify-end mr-4">
                <div className="mr-4">
                    <label className="block mb-2 text-md font-medium text-gray-900">From file format</label>
                    <select defaultValue={fromFileType} onChange={selectFromFileFormat} id="fromFileFormat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value={FILEFORMAT.JSON}>{FILEFORMAT.JSON.toUpperCase()}</option>
                    <option value={FILEFORMAT.XML}>{FILEFORMAT.XML.toUpperCase()}</option>
                    <option value={FILEFORMAT.SOAP}>{FILEFORMAT.SOAP.toUpperCase()}</option>
                    </select>
                </div>
                <div className="ml-4">
                <label className="block mb-2 text-md font-medium text-gray-900">To file format</label>
                <select defaultValue={toFileType} onChange={selectToFileFormat} id="toFileFormat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value={FILEFORMAT.JSON}>{FILEFORMAT.JSON.toUpperCase()}</option>
                    <option value={FILEFORMAT.XML}>{FILEFORMAT.XML.toUpperCase()}</option>
                    <option value={FILEFORMAT.SOAP}>{FILEFORMAT.SOAP.toUpperCase()}</option>
                </select>
                </div>
            </div>
            <Formatter fromFileType={fromFileType} toFileType={toFileType} />
        </div>
  )
}
