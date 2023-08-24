import React from 'react';
import Copy from '../icons/copy';
import { cleanupInput } from '../utils/cleanupInput';

export default function FormatterInput(props : any) {
    const {
        formatted, 
        onInputChange, 
        dataInput,
        fromFileType, 
        toFileType,
        onClickServerSide,
        onClickClientSide
    } = props;

    function copyToClipboard(input : string){
        navigator.clipboard.writeText(cleanupInput(input))
    }

    return (
        <form className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <label htmlFor="message" className="block max-w-none mb-2 pl-2 text-3xl font-medium text-gray-900 ">{fromFileType.toUpperCase()}</label>
        <div className="flex items-center">
            <button type="submit" className="text-gray border border-gray bg-white mt-4 mb-4 hover:bg-white-800 focus:outline-none font-medium rounded-lg text-sm px-5 ml-4 py-2.5 text-center" onClick={onClickServerSide}>Format {fromFileType.toUpperCase()} to {toFileType.toUpperCase()} server-side</button>
            <button type="submit" className="text-white bg-blue-700 mt-4 mb-4 mr-4 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 ml-4 py-2.5 text-center" onClick={onClickClientSide}>Format {fromFileType.toUpperCase()} to {toFileType.toUpperCase()} client-side</button>
            <div onClick={() => copyToClipboard(dataInput)}>
            <Copy />
            </div>
        </div>
        <textarea 
            onChange={onInputChange} 
            id="dataInput" rows={4} 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
            placeholder={`Input ${fromFileType.toUpperCase()} here`}
            >
        </textarea>
        {formatted.errorMessage && (
            <div className="p-4 mb-2 mt-2 text-sm text-red-800 rounded-lg border border-red-400 bg-red-100" role="alert">
                <span className="font-medium">Error:</span> {formatted.errorMessage}
            </div>
        )}
        {formatted.content && (<>            
            <div className="w-full flex items-center justify-between">
                <label htmlFor="message" className="block max-w-none mb-2 pb-2 pl-2 pt-6 text-3xl font-medium text-gray-900">{toFileType.toUpperCase()}</label>
                <div onClick={() => copyToClipboard(formatted.content.toString())}>
                    <Copy />
                </div>
            </div>
            <textarea id="message" rows={4} className="block p-2.5 w-full mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" disabled value={formatted.content.toString()}></textarea>
           
        </>)}
    </form> 
    )
}