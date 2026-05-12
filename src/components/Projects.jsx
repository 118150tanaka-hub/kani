import React, { useState } from 'react';
import images from '../images';

const iconLabels = {
  Illustration: '🎨',
  'CG Modeling': '🖥️',
  'Character Design': '👤'
};

const Project = ({ title, description, stack, images: projectImages }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const icon = iconLabels[title] || '🖼️';

  return (
    <div className="project">
      <h4 className="project-title">{title}</h4>
      <p>{description}</p>
      <p className="project-stack">{stack}</p>
      <div className="project-media">
        <div className="project-media-layout project-gallery-layout">
          <div className="project-thumb-large preview-thumb" onClick={() => setSelectedImage(projectImages[0])}>
            <img src={projectImages[0]} alt={`${title} sample 1 preview`} loading="lazy" />
            <div className="preview-caption">クリックで拡大</div>
          </div>
          <div className="project-thumb-small-column">
            <div className="project-thumb-small preview-thumb" onClick={() => setSelectedImage(projectImages[1])}>
              <img src={projectImages[1]} alt={`${title} sample 2 preview`} loading="lazy" />
              <div className="preview-caption">クリックで拡大</div>
            </div>
            <div className="project-thumb-small preview-thumb" onClick={() => setSelectedImage(projectImages[2])}>
              <img src={projectImages[2]} alt={`${title} sample 3 preview`} loading="lazy" />
              <div className="preview-caption">クリックで拡大</div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-fullscreen-inner" onClick={(e) => e.stopPropagation()}>
            <button className="overlay-close-btn" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage} alt="Full size preview" />
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container">
      <section className="section">
        <h3>Projects</h3>
        <div className="project-layout">
          <div className="project project-left">
            <Project
              title="Illustration"
              description="依頼された内容のイラスト作成"
              stack="使用ツール: Photoshop, Clip Studio Paint"
              images={[images.illustrationSample1, images.illustrationSample2, images.illustrationSample3]}
              note="Illustrationの画像を差し替えてください。"
            />
          </div>
          <div className="project-right">
            <Project
              title="CG Modeling"
              description="Mayaを使用したモデリング"
              stack="使用ツール: Maya, Substance Painter"
              images={[images.cgModelingSample1, images.cgModelingSample2, images.cgModelingSample3]}
              note="CG Modelingの画像を差し替えてください。"
            />
            <Project
              title="Character Design"
              description="オリジナルキャラクターのデザイン"
              stack="使用ツール: Procreate"
              images={[images.characterDesignSample1, images.characterDesignSample2, images.characterDesignSample3]}
              note="Character Designの画像を差し替えてください。"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;