import React, { useRef } from "react";

function ProfilePicUpload() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: "none"
                }}
            />
            <div
                style={{
                    height: "120px",
                    width: "120px"
                }}
                onClick={() => imageUploader.current.click()}
            >
                <img
                    ref={uploadedImage}
                    src="https://img.icons8.com/ios-filled/30/000000/conference-call.png"
                    border-radius="100%"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "acsolute"
                    }}
                />
            </div>
        </div>
    );
}
export default ProfilePicUpload;