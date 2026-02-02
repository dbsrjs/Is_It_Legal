// CategoryModal.js - 카테고리별 검색 예시 모달

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from './Modal';
import './CategoryModal.css';

function CategoryModal({ isOpen, onClose, category, onSearchExample }) {
  const { language } = useLanguage();

  const categoryData = {
    digital: {
      ko: {
        title: "디지털",
        description: "VPN, 토렌트, 웹 스크래핑 관련 법률",
        examples: [
          { query: "중국 VPN", label: "중국에서 VPN 사용" },
          { query: "독일 토렌트", label: "독일에서 토렌트 다운로드" },
          { query: "한국 웹 스크래핑", label: "한국에서 웹 스크래핑" },
          { query: "미국 암호화폐", label: "미국에서 암호화폐 거래" },
          { query: "일본 스트리밍", label: "일본에서 온라인 스트리밍" }
        ]
      },
      en: {
        title: "Digital",
        description: "Laws about VPN, Torrenting, Web Scraping",
        examples: [
          { query: "VPN China", label: "Using VPN in China" },
          { query: "torrenting Germany", label: "Torrenting in Germany" },
          { query: "web scraping Korea", label: "Web scraping in Korea" },
          { query: "cryptocurrency USA", label: "Cryptocurrency trading in USA" },
          { query: "streaming Japan", label: "Online streaming in Japan" }
        ]
      },
      ja: {
        title: "デジタル",
        description: "VPN、トレント、ウェブスクレイピング関連の法律",
        examples: [
          { query: "中国 VPN", label: "中国でのVPN使用" },
          { query: "ドイツ トレント", label: "ドイツでのトレントダウンロード" },
          { query: "韓国 ウェブスクレイピング", label: "韓国でのウェブスクレイピング" },
          { query: "アメリカ 暗号通貨", label: "アメリカでの暗号通貨取引" },
          { query: "日本 ストリーミング", label: "日本でのオンラインストリーミング" }
        ]
      }
    },
    drone: {
      ko: {
        title: "드론 & 사진",
        description: "드론 촬영, 거리 사진 관련 법률",
        examples: [
          { query: "일본 드론", label: "일본에서 드론 비행" },
          { query: "프랑스 거리 사진", label: "프랑스에서 거리 사진 촬영" },
          { query: "미국 드론 등록", label: "미국에서 드론 등록" },
          { query: "영국 드론", label: "영국에서 드론 촬영" },
          { query: "한국 야간 드론", label: "한국에서 야간 드론 비행" }
        ]
      },
      en: {
        title: "Drone & Photography",
        description: "Laws about Drone flying, Street photography",
        examples: [
          { query: "drone Japan", label: "Flying drones in Japan" },
          { query: "street photography France", label: "Street photography in France" },
          { query: "drone registration USA", label: "Drone registration in USA" },
          { query: "drone UK", label: "Drone flying in UK" },
          { query: "night drone Korea", label: "Night drone flying in Korea" }
        ]
      },
      ja: {
        title: "ドローン & 写真",
        description: "ドローン飛行、ストリート写真撮影関連の法律",
        examples: [
          { query: "日本 ドローン", label: "日本でのドローン飛行" },
          { query: "フランス ストリート写真", label: "フランスでのストリート写真撮影" },
          { query: "アメリカ ドローン登録", label: "アメリカでのドローン登録" },
          { query: "イギリス ドローン", label: "イギリスでのドローン撮影" },
          { query: "韓国 夜間ドローン", label: "韓国での夜間ドローン飛行" }
        ]
      }
    },
    gambling: {
      ko: {
        title: "도박",
        description: "온라인 카지노, 스포츠 베팅 관련 법률",
        examples: [
          { query: "한국 온라인 카지노", label: "한국에서 온라인 카지노" },
          { query: "영국 스포츠 베팅", label: "영국에서 스포츠 베팅" },
          { query: "미국 포커", label: "미국에서 온라인 포커" },
          { query: "일본 경마", label: "일본에서 경마 베팅" },
          { query: "싱가포르 카지노", label: "싱가포르 카지노 출입" }
        ]
      },
      en: {
        title: "Gambling",
        description: "Laws about Online casino, Sports betting",
        examples: [
          { query: "online casino Korea", label: "Online casino in Korea" },
          { query: "sports betting UK", label: "Sports betting in UK" },
          { query: "online poker USA", label: "Online poker in USA" },
          { query: "horse racing Japan", label: "Horse racing betting in Japan" },
          { query: "casino Singapore", label: "Casino entry in Singapore" }
        ]
      },
      ja: {
        title: "ギャンブル",
        description: "オンラインカジノ、スポーツベッティング関連の法律",
        examples: [
          { query: "韓国 オンラインカジノ", label: "韓国でのオンラインカジノ" },
          { query: "イギリス スポーツベッティング", label: "イギリスでのスポーツベッティング" },
          { query: "アメリカ ポーカー", label: "アメリカでのオンラインポーカー" },
          { query: "日本 競馬", label: "日本での競馬ベッティング" },
          { query: "シンガポール カジノ", label: "シンガポールカジノ入場" }
        ]
      }
    },
    substances: {
      ko: {
        title: "물질",
        description: "대마초, CBD, 전자담배 관련 법률",
        examples: [
          { query: "독일 대마초", label: "독일에서 대마초 소지" },
          { query: "미국 CBD", label: "미국에서 CBD 오일" },
          { query: "한국 전자담배", label: "한국에서 전자담배 사용" },
          { query: "캐나다 대마초", label: "캐나다에서 대마초" },
          { query: "태국 CBD", label: "태국에서 CBD 제품" }
        ]
      },
      en: {
        title: "Substances",
        description: "Laws about Cannabis, CBD, E-cigarettes",
        examples: [
          { query: "cannabis Germany", label: "Cannabis possession in Germany" },
          { query: "CBD USA", label: "CBD oil in USA" },
          { query: "e-cigarettes Korea", label: "E-cigarettes in Korea" },
          { query: "cannabis Canada", label: "Cannabis in Canada" },
          { query: "CBD Thailand", label: "CBD products in Thailand" }
        ]
      },
      ja: {
        title: "物質",
        description: "大麻、CBD、電子タバコ関連の法律",
        examples: [
          { query: "ドイツ 大麻", label: "ドイツでの大麻所持" },
          { query: "アメリカ CBD", label: "アメリカでのCBDオイル" },
          { query: "韓国 電子タバコ", label: "韓国での電子タバコ使用" },
          { query: "カナダ 大麻", label: "カナダでの大麻" },
          { query: "タイ CBD", label: "タイでのCBD製品" }
        ]
      }
    },
    possessions: {
      ko: {
        title: "소지품",
        description: "칼, 호신용 스프레이, 전기충격기 관련 법률",
        examples: [
          { query: "영국 칼", label: "영국에서 칼 소지" },
          { query: "미국 호신용 스프레이", label: "미국에서 호신용 스프레이" },
          { query: "한국 전기충격기", label: "한국에서 전기충격기" },
          { query: "일본 칼", label: "일본에서 칼 휴대" },
          { query: "독일 호신용품", label: "독일에서 호신용품" }
        ]
      },
      en: {
        title: "Possessions",
        description: "Laws about Knives, Pepper spray, Tasers",
        examples: [
          { query: "knife UK", label: "Carrying knives in UK" },
          { query: "pepper spray USA", label: "Pepper spray in USA" },
          { query: "taser Korea", label: "Tasers in Korea" },
          { query: "knife Japan", label: "Carrying knives in Japan" },
          { query: "self-defense Germany", label: "Self-defense items in Germany" }
        ]
      },
      ja: {
        title: "所持品",
        description: "ナイフ、催涙スプレー、スタンガン関連の法律",
        examples: [
          { query: "イギリス ナイフ", label: "イギリスでのナイフ所持" },
          { query: "アメリカ 催涙スプレー", label: "アメリカでの催涙スプレー" },
          { query: "韓国 スタンガン", label: "韓国でのスタンガン" },
          { query: "日本 ナイフ", label: "日本でのナイフ携帯" },
          { query: "ドイツ 護身用品", label: "ドイツでの護身用品" }
        ]
      }
    },
    privacy: {
      ko: {
        title: "프라이버시",
        description: "통화 녹음, 위치 추적 관련 법률",
        examples: [
          { query: "한국 통화 녹음", label: "한국에서 통화 녹음" },
          { query: "미국 CCTV", label: "미국에서 CCTV 설치" },
          { query: "독일 GPS 추적", label: "독일에서 GPS 추적" },
          { query: "영국 개인정보", label: "영국에서 개인정보 수집" },
          { query: "일본 감시카메라", label: "일본에서 감시카메라" }
        ]
      },
      en: {
        title: "Privacy",
        description: "Laws about Call recording, Location tracking",
        examples: [
          { query: "call recording Korea", label: "Call recording in Korea" },
          { query: "CCTV USA", label: "CCTV installation in USA" },
          { query: "GPS tracking Germany", label: "GPS tracking in Germany" },
          { query: "personal data UK", label: "Personal data collection in UK" },
          { query: "surveillance camera Japan", label: "Surveillance cameras in Japan" }
        ]
      },
      ja: {
        title: "プライバシー",
        description: "通話録音、位置追跡関連の法律",
        examples: [
          { query: "韓国 通話録音", label: "韓国での通話録音" },
          { query: "アメリカ CCTV", label: "アメリカでのCCTV設置" },
          { query: "ドイツ GPS追跡", label: "ドイツでのGPS追跡" },
          { query: "イギリス 個人情報", label: "イギリスでの個人情報収集" },
          { query: "日本 監視カメラ", label: "日本での監視カメラ" }
        ]
      }
    },
    traffic: {
      ko: {
        title: "교통",
        description: "음주운전 한계, 전화 사용 관련 법률",
        examples: [
          { query: "한국 음주운전", label: "한국 음주운전 기준" },
          { query: "미국 운전중 전화", label: "미국에서 운전 중 전화" },
          { query: "독일 속도제한", label: "독일 아우토반 속도제한" },
          { query: "일본 주차", label: "일본에서 노상주차" },
          { query: "영국 안전벨트", label: "영국에서 안전벨트 착용" }
        ]
      },
      en: {
        title: "Traffic",
        description: "Laws about DUI limits, Phone usage while driving",
        examples: [
          { query: "DUI Korea", label: "DUI limits in Korea" },
          { query: "phone while driving USA", label: "Phone usage while driving in USA" },
          { query: "speed limit Germany", label: "Autobahn speed limits in Germany" },
          { query: "parking Japan", label: "Street parking in Japan" },
          { query: "seatbelt UK", label: "Seatbelt requirements in UK" }
        ]
      },
      ja: {
        title: "交通",
        description: "飲酒運転制限、電話使用関連の法律",
        examples: [
          { query: "韓国 飲酒運転", label: "韓国飲酒運転基準" },
          { query: "アメリカ 運転中電話", label: "アメリカでの運転中電話" },
          { query: "ドイツ 速度制限", label: "ドイツアウトバーン速度制限" },
          { query: "日本 駐車", label: "日本での路上駐車" },
          { query: "イギリス シートベルト", label: "イギリスでのシートベルト着用" }
        ]
      }
    },
    business: {
      ko: {
        title: "비즈니스",
        description: "암호화폐, 프리랜싱 관련 법률",
        examples: [
          { query: "한국 암호화폐 세금", label: "한국에서 암호화폐 과세" },
          { query: "미국 프리랜서", label: "미국에서 프리랜서 활동" },
          { query: "독일 원격근무", label: "독일에서 원격근무" },
          { query: "일본 비자", label: "일본 비즈니스 비자" },
          { query: "싱가포르 창업", label: "싱가포르에서 회사 설립" }
        ]
      },
      en: {
        title: "Business",
        description: "Laws about Cryptocurrency, Freelancing",
        examples: [
          { query: "cryptocurrency tax Korea", label: "Cryptocurrency taxation in Korea" },
          { query: "freelancing USA", label: "Freelancing in USA" },
          { query: "remote work Germany", label: "Remote work in Germany" },
          { query: "business visa Japan", label: "Business visa in Japan" },
          { query: "company formation Singapore", label: "Company formation in Singapore" }
        ]
      },
      ja: {
        title: "ビジネス",
        description: "暗号通貨、フリーランス関連の法律",
        examples: [
          { query: "韓国 暗号通貨税", label: "韓国での暗号通貨課税" },
          { query: "アメリカ フリーランス", label: "アメリカでのフリーランス活動" },
          { query: "ドイツ リモートワーク", label: "ドイツでのリモートワーク" },
          { query: "日本 ビザ", label: "日本ビジネスビザ" },
          { query: "シンガポール 起業", label: "シンガポールでの会社設立" }
        ]
      }
    }
  };

  if (!isOpen || !category || !categoryData[category]) return null;

  const data = categoryData[category][language] || categoryData[category].en;

  const handleExampleClick = (query) => {
    onSearchExample(query);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={data.title}>
      <p className="category-modal-description">{data.description}</p>

      <div className="category-examples">
        <h3>검색 예시</h3>
        <div className="examples-grid">
          {data.examples.map((example, index) => (
            <button
              key={index}
              className="example-button"
              onClick={() => handleExampleClick(example.query)}
            >
              <span className="example-icon">🔍</span>
              <span className="example-label">{example.label}</span>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default CategoryModal;
