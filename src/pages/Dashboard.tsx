import React from "react";
import leaf from "../assets/icons/leaf.svg";
import TestImg from "../assets/images/TestImg.jpeg";

const Dashboard = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-col items-center pt-8 space-y-4">
                <h1 className="text-emerald-900 text-3xl">Perfect Thyme</h1>
                <div className="flex flex-col items-center">
                    <p>A tasteful place to store, spice up, and perfect your recipes!</p>
                    <p className="italic">One thyme at a time.</p>
                </div>
                <img src={leaf} alt="Leaf Logo" className="w-5 h-5" />
            </div>

            <div className="flex-grow flex">
                <div className="max-w-fit m-4 p-4 border rounded overflow-auto">
                    <h3 className="font-bold mb-2">Suggestions</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>kshdfljs fkdjljflskjdf lsjdfljsldf lk fjkdjflsdj</li>
                        <li>flskjfldj kjdflsj ksjdflsjflkd lksdjf</li>
                        <li>kjdflksj kdsjfldkj kdjlkfj lsll</li>
                        <li>kdjf ksdjflkj slkfjldskj lksdjflkjlsjdlfkjsl</li>
                        <li>kdjf kdljfkdj flksdjfls dflkk</li>
                        <li>ksjf kdjfljsiewurj dkjvi</li>
                        <li>lksjdf lsjkdflsdkjlldfk </li>
                    </ul>

                    <h3 className="font-bold mt-6 mb-2">Last visited Recipes</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>kdj kdjdkjd dls djlfkj</li>
                        <li>kdjf kdljfkdj flksdjfls dflkk</li>
                        <li>ksjf kdjfljsiewurj dkjvi</li>
                    </ul>
                </div>
                <div className="flex flex-col flex-grow w-full m-4">
                    <div className="flex flex-row mb-4 h-fit justify-between">
                        <div className="border rounded w-2/12">Filter</div>
                        <div className="border rounded w-4/12">Search</div>
                    </div>
                    <div className="space-1 flex-grow">
                        <div className="h-1/2 w-1/3 p-4">
                            <h2 className="text-2xl">Recipe 1</h2>
                            <p>Here i will put any short description to the recipe</p>
                            <img src={TestImg} alt="Food Test Image" className="w-full h-fit" />
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};
  
export default Dashboard;
  