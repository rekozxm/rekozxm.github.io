import InfoCard from './info-card'
import AbilityCard from './ability-card'
const MainDom = () => {
  return (
    <>
      <InfoCard></InfoCard>
      <div className="r-aboutme-wrap">
        <div className="pt120">
          <AbilityCard></AbilityCard>
          <div className="r-aboutme-wrap_introduce">ๆ็ไป็ป</div>
        </div>
      </div>
    </>
  )
}

export default MainDom
