import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
    
    return (
        <footer className='footer row px-4'>
            <div className="col-12 col-md-3">
                <ul style={{fontSize: '18px'}}> 
                    <li type="button" data-toggle="modal" data-target="#modalMembership">Tích điểm Quà tặng VIP</li>
                    <li><Link to='/ordermanagement' style={{textDecoration: 'none', color: 'black'}}>Lịch sử mua hàng</Link></li> 
                    <li type="button" data-toggle="modal" data-target="#modalAbout">Về chúng tôi</li>
                    <li type="button" data-toggle="modal" data-target="#policyAbout">Chính sách bảo hành</li>
                </ul>
            </div>
            <div className="col-12 col-md-3">
                <ul style={{fontSize: '18px'}}>
                    <li>Gửi góp ý, khiếu nại</li>
                </ul>
            </div>
            <div class="modal fade" id="modalMembership" tabindex="-1" role="dialog" aria-labelledby="modalMembershipLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="modalMembershipLabel" style={{textAlign: 'center'}}>Chương trình khách hàng thân thiết của Matrix</h4>
                    </div>
                    <div class="modal-body modal-body-gift">
                        Hệ thống tính điểm khách hàng thân thiết của Matrix Ecommerce được xây dựng dựa trên số tiền mà khách hàng đã chi tiêu. Chúng tôi luôn đặt sự thân thiện và hài lòng của khách hàng lên hàng đầu, và vì vậy, chúng tôi mong muốn phần thưởng sẽ là một phần của trải nghiệm mua sắm của họ.
                        <br />
                        <b>Chúng tôi chào đón những khách hàng mới với một mức giảm giá ban đầu, tương ứng với hạng thành viên đồng, chiết khấu là 1% trên tổng giá trị đơn hàng. Đối với những khách hàng có nhu cầu mua sắm thường xuyên hơn, hệ thống hạng thành viên của chúng tôi sẽ mang lại những ưu đãi đặc biệt hơn.</b>
                        <br />
                        Dưới đây là bảng hạng khách hàng thân thiết và chiết khấu tương ứng:
                        <br />
                        <b>Hạng Đồng (Bronze):</b> Chiết khấu 1% trên tổng giá trị đơn hàng.
                        <br />
                        <b>Hạng Bạc (Silver):</b> Chiết khấu 3% trên tổng giá trị đơn hàng.
                        <br />
                        <b>Hạng Vàng (Gold):</b> Chiết khấu 5% trên tổng giá trị đơn hàng.
                        <br />
                        <b>Hạng Bạch Kim (Platinum):</b> Chiết khấu 10% trên tổng giá trị đơn hàng.
                        <br />
                        Để đạt được hạng thành viên cao hơn, quý khách hàng có thể tiến hành mua sắm để tích lũy điểm (membership points). Mỗi 1000 đồng chi tiêu sẽ đem lại cho bạn 1 điểm. Các điểm này sẽ xác định hạng thành viên của bạn như sau:
                        <br />
                        <br />
                        <b>Hạng Đồng (Bronze):</b> Từ 0 đến 2999 điểm.
                        <br />
                        <b>Hạng Bạc (Silver):</b> Từ 3000 đến 4999 điểm.
                        <br />
                        <b>Hạng Vàng (Gold):</b> Từ 5000 đến 9999 điểm.
                        <br />
                        <b>Hạng Bạch Kim (Platinum):</b> Lớn hơn 10000 điểm.
                        <br />
                        Chúng tôi hy vọng rằng những ưu đãi này sẽ làm cho trải nghiệm mua sắm của quý khách hàng trở nên thú vị và đáng nhớ hơn. Chúc quý khách hàng có những phút giây tuyệt vời khi mua sắm tại Matrix Ecommerce.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalAbout" tabindex="-1" role="dialog" aria-labelledby="modalAboutLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="modalAboutLabel" style={{textAlign: 'center', display: 'block'}}>Matrix Ecommerce</h4>
                    </div>
                    <div class="modal-body modal-body-gift">
                        Chào mừng bạn đến với Matrix Ecommerce!
                        <br />
                        Matrix Ecommerce là địa chỉ tin cậy cho mọi nhu cầu mua sắm trực tuyến của bạn. Chúng tôi tự hào là một trong những nền tảng thương mại điện tử hàng đầu, mang đến cho khách hàng trải nghiệm mua sắm hoàn hảo và dịch vụ tuyệt vời.
                        <br />
                        Với sứ mệnh làm cho việc mua sắm trở nên dễ dàng và tiện lợi hơn bao giờ hết, chúng tôi cam kết cung cấp một bộ sưu tập sản phẩm đa dạng, từ hàng điện tử, đồ gia dụng đến thời trang và đồ chơi trẻ em. Bất kể bạn đang tìm kiếm sản phẩm nào, bạn đều có thể tìm thấy ở đây.
                        <br />
                        Với sự tận tâm và nhiệt huyết của đội ngũ nhân viên, chúng tôi luôn mong muốn đem lại cho khách hàng những trải nghiệm mua sắm tốt nhất. Chúng tôi không chỉ cung cấp các sản phẩm chất lượng cao với giá cả hợp lý mà còn cam kết đảm bảo dịch vụ sau bán hàng tuyệt vời.
                        <br />
                        Hơn nữa, chúng tôi luôn nỗ lực để cải thiện và phát triển dịch vụ của mình. Điều này bao gồm việc thường xuyên cập nhật sản phẩm mới nhất, cải thiện trải nghiệm mua sắm trực tuyến và mở rộng mạng lưới giao hàng để đáp ứng tối đa nhu cầu của khách hàng.
                        <br />
                        Matrix Ecommerce không chỉ là nơi mua sắm, mà còn là đối tác đáng tin cậy của bạn trong hành trình tìm kiếm những sản phẩm chất lượng với dịch vụ hoàn hảo. Hãy đồng hành cùng chúng tôi và khám phá thế giới mua sắm trực tuyến tuyệt vời tại Matrix Ecommerce ngay hôm nay!
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="policyAbout" tabindex="-1" role="dialog" aria-labelledby="bLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="bLabel" style={{textAlign: 'center', display: 'block'}}>Matrix Ecommerce</h4>
                    </div>
                    <div class="modal-body modal-body-gift">
                        <div id="policy">
                            <h3>Chính sách Bảo hành</h3>
                            <p>
                                Tại Matrix Ecommerce, chúng tôi cam kết cung cấp dịch vụ bảo hành chất lượng
                                nhất để đảm bảo sự hài lòng tuyệt đối của khách hàng. Dưới đây là một số
                                điều bạn cần biết về chính sách bảo hành của chúng tôi:
                            </p>
                            <h4>1. Chính sách Bảo hành Sản phẩm</h4>
                            <p>
                                Chúng tôi cam kết bảo hành sản phẩm của bạn trong thời gian quy định và đảm
                                bảo sửa chữa hoặc thay thế sản phẩm nếu cần thiết.
                            </p>
                            <h4>2. Thời Gian Bảo hành</h4>
                            <p>
                                Thời gian bảo hành của sản phẩm thường tuân theo chính sách của nhà sản
                                xuất, thường là từ 6 đến 12 tháng tùy theo loại sản phẩm.
                            </p>
                            <h4>3. Điều Kiện Bảo hành</h4>
                            <p>
                                Sản phẩm phải được sử dụng đúng cách và không gặp phải các vấn đề do sử dụng
                                sai lệch hoặc ngẫu nhiên. Bảo hành không bao gồm các vấn đề phát sinh do sự
                                cố tự nhiên hoặc sử dụng không đúng cách.
                            </p>
                            <h4>4. Thủ Tục Bảo hành</h4>
                            <p>
                                Để bảo hành sản phẩm, vui lòng liên hệ với dịch vụ khách hàng của chúng tôi
                                để biết thêm thông tin về quy trình và thủ tục cần thiết.
                            </p>
                            <h4>5. Phản Hồi và Hỗ Trợ</h4>
                            <p>
                                Chúng tôi luôn sẵn lòng lắng nghe và giải quyết mọi vấn đề phát sinh liên
                                quan đến bảo hành. Đội ngũ hỗ trợ của chúng tôi sẽ cung cấp sự giúp đỡ và hỗ
                                trợ tốt nhất để đảm bảo bạn nhận được sự hài lòng tuyệt đối.
                            </p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;